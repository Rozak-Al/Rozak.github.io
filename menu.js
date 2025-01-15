let menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about.html' },
    { text: 'Team', url: '/teams.html' },
    { text: 'Blog', url: '/Blog.html' },
    { text: 'Portofolio', url: '/portofolio.html' },
]
let menu = document.createElement('ul')
menuItems.forEach(item => {
    let menuItem = document.createElement('li')
    let link = document.createElement('a')
    link.href = item.url
    link.textContent = item.text
    menuItem.appendChild(link)
    menu.appendChild(menuItem)
});
document.body.appendChild(menu)