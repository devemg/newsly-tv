/**
 * Center container vertical scroll
 *
 * @param index index of elements container in the page
 * @param parentElement Element used as reference to manage the scroll
 */
export const onFocusCarousel = (index: number, parentElement: HTMLElement) => {
    if (index > 0) {
        parentElement?.scrollIntoView();
    } else {
        window.scrollTo(0, 0);
    }
};