chrome.contextMenus.create({
    title: 'Color Charts',
    contexts: ['image'],
    id: 'parent'
});

chrome.contextMenus.create({
    title: 'None',
    type: "radio",
    contexts: ['image'],
    parentId: 'parent',
    checked: true, 
});

chrome.contextMenus.create({
    title: 'Okabe and Ito',
    type: "radio",
    contexts: ['image'],
    parentId: 'parent',
    checked: false, 
});

chrome.contextMenus.create({
    title: 'Tol (bright)',
    type: "radio",
    contexts: ['image'],
    parentId: 'parent',
    checked: false
});

chrome.contextMenus.create({
    title: 'Tol (muted)',
    type: "radio",
    contexts: ['image'],
    parentId: 'parent',
    checked: false, 
});

chrome.contextMenus.create({
    title: 'Tol (light)',
    type: "radio",
    contexts: ['image'],
    parentId: 'parent',
    checked: false, 
});