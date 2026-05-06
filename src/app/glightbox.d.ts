declare module 'glightbox' {
    interface GlightboxOptions {
        selector?: string;
        [key: string]: any;
    }
    export default class GLightbox {
        constructor(options?: GlightboxOptions);
    }
}