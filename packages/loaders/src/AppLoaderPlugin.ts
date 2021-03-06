import { Loader } from './Loader';

/**
 * Application plugin for supporting loader option. Installing the LoaderPlugin
 * is not necessary if using **pixi.js** or **pixi.js-legacy**.
 * @example
 * import {AppLoaderPlugin} from '@pixi/loaders';
 * import {Application} from '@pixi/app';
 * Application.registerPlugin(AppLoaderPlugin);
 * @class
 * @memberof PIXI
 */
export class AppLoaderPlugin
{
    public static loader: Loader;

    /**
     * Called on application constructor
     * @param {object} options
     * @private
     */
    static init(options?: GlobalMixins.IApplicationOptions): void
    {
        options = Object.assign({
            sharedLoader: false,
        }, options);

        /**
         * Loader instance to help with asset loading.
         * @memberof PIXI.Application#
         * @type {PIXI.Loader}
         * @readonly
         */
        this.loader = options.sharedLoader ? Loader.shared : new Loader();
    }

    /**
     * Called when application destroyed
     *
     * @private
     */
    static destroy(): void
    {
        if (this.loader)
        {
            this.loader.destroy();
            this.loader = null;
        }
    }
}
