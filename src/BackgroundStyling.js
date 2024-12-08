export const blurredBackground = (image) => {
    const backgroundStyling = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(10px)", 
        zIndex: 0, 
    }
    return backgroundStyling;
}
