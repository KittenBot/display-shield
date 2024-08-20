namespace pxsim.ScreenMethods {
    export function updateScreen(img: RefImage) {
        const state = getScreenState();
        if (state)
            state.showImage(img);
    }
    export function updateStats(s: string) {
        const state = getScreenState();
        if (state)
            state.updateStats(s);
    }
    export function setPalette(b: RefBuffer) {
        const state = getScreenState();
        if (state)
            state.setPalette(b);
    }
    export function setScreenBrightness(b: number) {
        const state = getScreenState();
        if (state)
            state.setScreenBrightness(b);
    }
    export function displayHeight(): number {
        const state = getScreenState();
        if (state)
            return state.displayHeight();
    }
    export function displayWidth(): number {
        const state = getScreenState();
        if (state)
            return state.displayWidth();
    }
    export function displayPresent(): boolean {
        const state = getScreenState();
        if (state)
            return state.displayPresent();
    }
}
