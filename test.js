const handleRefferal = async (
    backendUrl,
    iosRedirectUrl,
    androidRedirectUrl
) => {
    const params = new URLSearchParams(window.location.search);
    const inviterId = params.get("inviterId");


    if (inviterId) {
        // Collect device info
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        await fetch(backendUrl+`/store-referral`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userAgent: window.navigator.userAgent,
                screenWidth: screenWidth,
                screenHeight: screenHeight,
                inviterId: inviterId,
            }),
        });
    }
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = iosRedirectUrl;
    } else if (/Android/i.test(userAgent)) {
      window.location.href = androidRedirectUrl;
    } else {
      console.error("Unsupported OS");
    }
};