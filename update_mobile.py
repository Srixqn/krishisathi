import os
import glob

# Bottom Nav HTML
BOTTOM_NAV = """
<!-- Mobile Bottom Nav -->
<nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex items-center justify-around py-2.5 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] pb-safe">
  <a href="index.html" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-emerald-700 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    <span class="text-[10px] font-semibold" data-i18n="nav-dashboard">Home</span>
  </a>
  <a href="crops.html" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-emerald-700 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
    <span class="text-[10px] font-semibold" data-i18n="nav-crops">Crops</span>
  </a>
  <a href="marketplace.html" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-emerald-700 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
    <span class="text-[10px] font-semibold" data-i18n="nav-marketplace">Market</span>
  </a>
  <a href="profile.html" class="flex flex-col items-center gap-1 text-zinc-500 hover:text-emerald-700 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
    <span class="text-[10px] font-semibold" data-i18n="nav-profile">Profile</span>
  </a>
</nav>
"""

html_files = glob.glob('*.html')

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Update aside
    old_aside = '<aside class="flex-shrink-0 bg-white border-r border-zinc-200 flex flex-col"'
    new_aside = '<aside class="hidden lg:flex flex-shrink-0 bg-white border-r border-zinc-200 flex-col"'
    if old_aside in content:
        content = content.replace(old_aside, new_aside)
        modified = True

    # 2. Update main container padding for mobile
    # We'll use regex to target the main tag if it exists
    old_main = '<main class="flex-1 overflow-y-auto px-8 py-7">'
    new_main = '<main class="flex-1 overflow-y-auto px-4 lg:px-8 py-5 lg:py-7 pb-24 lg:pb-7">'
    if old_main in content:
        content = content.replace(old_main, new_main)
        modified = True

    # Also check if it's px-8 py-6, etc.
    if 'px-8 ' in content or 'py-7 ' in content or 'py-4 ' in content:
        # We can just replace the class strings more loosely for header
        old_header = '<header class="bg-white border-b border-zinc-200 px-8 py-4 flex items-center justify-between flex-shrink-0">'
        new_header = '<header class="bg-white border-b border-zinc-200 px-4 lg:px-8 py-4 flex items-center justify-between flex-shrink-0">'
        if old_header in content:
            content = content.replace(old_header, new_header)
            modified = True

    # 3. Inject Bottom Nav Bar
    if '</body>' in content and '<!-- Mobile Bottom Nav -->' not in content:
        content = content.replace('</body>', BOTTOM_NAV + '\n</body>')
        modified = True
    
    # Update active class for nav items based on filename (basic logic)
    if '<!-- Mobile Bottom Nav -->' in content:
        # This is a bit complex for a regex, so let's just insert it clean. The JS or CSS can handle active state or we just leave them gray for now (it's prototype).
        pass

    if modified:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {fpath}")
