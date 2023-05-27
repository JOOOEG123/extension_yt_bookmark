{
    "manifest_version": 3,
    "name": "My Extension",
    "version": "1.0",
    "description": "This extension is a starting point to create a real Chrome extension",
    "permissions": [
        "storage",
        "activeTab",
        "scripting",
        "tabs",
        "declarativeContent",
        "webNavigation",
        "webRequest",
        "cookies",
        "contextMenus",
        "notifications",
        "clipboardWrite",
        "clipboardRead",
        "unlimitedStorage",
        "downloads",
        "downloads.shelf",
        "downloads.open",
        "downloads.open"
    ],
    "action": {
        "default_icon": {
            "16": "/images/img_94963.png",
            "32": "/images/img_94963.png",
            "48": "/images/img_94963.png",
            "128": "/images/img_94963.png"
        },
        "default_popup": "popup.html",
        "default_title": "Click here!"
    },
    "icons": {
        "16": "/images/img_94963.png",
        "32": "/images/img_94963.png",
        "48": "/images/img_94963.png",
        "128": "/images/img_94963.png"
    },
    "content_scripts": [
        {
            "matches": [
                "<all_urls>"
            ],
            "js": [
                "content.js"
            ],
            "run_at": "document_end",
            "all_frames": true,
            "css": [
                "content.css"
            ]
        }
    ],
    "background": {
        "service_worker": "background.js",
        js: ["new background file.js"]
    }
}