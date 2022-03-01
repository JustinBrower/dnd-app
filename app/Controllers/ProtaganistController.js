


async function _drawProtaganist() {
    try {
        await protaganistService.drawProtaganist()
    } catch (error) {
        console.log(error);
    }
}