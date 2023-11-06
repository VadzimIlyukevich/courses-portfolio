type FocusableElement = HTMLInputElement | HTMLTextAreaElement
export const focus = function (el : FocusableElement){
    el.focus()
}