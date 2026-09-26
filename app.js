/* ===================================================================
   AD MONETIZATION NETWORK - JAVASCRIPT CONTROLLER
   Manages all 10 Ad Formats, Slot Inspectors, and Empty Slot States
   =================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initSlotsInspector();
    initStickyBanner();
    initSlotCopyListeners();
});

// All 10 Formats from User Request Checklist
const AD_FORMATS_CONFIG = [
    { name: "Popunder [TOP]", type: "Script / Tag", id: "ad-slot-popunder-head", size: "Global Popunder Window" },
    { name: "Smartlink", type: "Direct Target", id: "smartlink-slot-top-1", size: "High-CPM URL Link" },
    { name: "Native Banner", type: "Grid Unit", id: "ad-slot-native-banner-container-1", size: "Responsive 4-Card Grid" },
    { name: "Social Bar [TOP]", type: "Sticky Bar", id: "slot-social-bar-box", size: "Full Width Top Bar" },
    { name: "Banner 728x90", type: "Leaderboard", id: "ad-slot-banner-728x90-top", size: "728 × 90 px" },
    { name: "Banner 468x60", type: "Full Banner", id: "ad-slot-banner-468x60-top", size: "468 × 60 px" },
    { name: "Banner 300x250", type: "Medium Rectangle", id: "ad-slot-banner-300x250-1", size: "300 × 250 px" },
    { name: "Banner 160x600", type: "Wide Skyscraper", id: "ad-slot-banner-160x600-left-1", size: "160 × 600 px" },
    { name: "Banner 160x300", type: "Half Skyscraper", id: "ad-slot-banner-160x300-left-1", size: "160 × 300 px" },
    { name: "Banner 320x50", type: "Mobile Leaderboard", id: "ad-slot-banner-320x50-sticky", size: "320 × 50 px" }
];

/**
 * Initializes the Ad Slots Inspector Drawer
 */
function initSlotsInspector() {
    const drawer = document.getElementById("slotsDrawer");
    const toggleBtn = document.getElementById("toggleGuideBtn");
    const closeBtn = document.getElementById("closeDrawerBtn");
    const listContainer = document.getElementById("slotsDrawerList");

    if (!drawer || !toggleBtn || !closeBtn || !listContainer) return;

    toggleBtn.addEventListener("click", () => {
        drawer.classList.add("open");
        drawer.setAttribute("aria-hidden", "false");
    });

    closeBtn.addEventListener("click", () => {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
    });

    // Populate the list
    listContainer.innerHTML = AD_FORMATS_CONFIG.map(slot => `
        <div class="drawer-slot-item">
            <div class="slot-item-top">
                <span class="slot-item-name">${slot.name}</span>
                <span class="slot-item-type">${slot.type}</span>
            </div>
            <div class="slot-item-id">
                <code>#${slot.id}</code>
                <button class="btn-copy-slot" onclick="copySlotId('${slot.id}')">Copy ID</button>
            </div>
        </div>
    `).join("");
}

/**
 * Click-to-copy functionality on empty slot boxes
 */
function initSlotCopyListeners() {
    document.querySelectorAll(".ad-slot-box").forEach(slot => {
        slot.addEventListener("click", (e) => {
            // Only trigger copy if slot is empty
            if (slot.children.length === 0 || slot.innerHTML.trim() === "") {
                const slotId = slot.id;
                if (slotId) {
                    copySlotId(slotId);
                }
            }
        });
    });
}

/**
 * Helper to copy slot ID to clipboard with toast notification
 */
window.copySlotId = function(id) {
    if (!id) return;
    navigator.clipboard.writeText(id).then(() => {
        showToast(`Copied Slot ID: #${id}`);
    }).catch(() => {
        showToast(`Slot ID: #${id}`);
    });
};

/**
 * Toast Notification system
 */
function showToast(message) {
    let toast = document.getElementById("networkToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "networkToast";
        toast.style.position = "fixed";
        toast.style.bottom = "80px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "#121724";
        toast.style.color = "#00f0ff";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "8px";
        toast.style.border = "1px solid #00f0ff";
        toast.style.boxShadow = "0 4px 20px rgba(0, 240, 255, 0.3)";
        toast.style.zIndex = "9999";
        toast.style.fontFamily = "'Space Grotesk', sans-serif";
        toast.style.fontSize = "0.85rem";
        toast.style.fontWeight = "600";
        toast.style.transition = "opacity 0.3s ease";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = "1";
    setTimeout(() => {
        toast.style.opacity = "0";
    }, 2500);
}

/**
 * Sticky banner close toggle
 */
function initStickyBanner() {
    const stickyBar = document.getElementById("stickyAdBar");
    const closeBtn = document.getElementById("closeStickyBtn");

    if (stickyBar && closeBtn) {
        closeBtn.addEventListener("click", () => {
            stickyBar.style.display = "none";
            document.body.style.paddingBottom = "0";
        });
    }
}
