/// <reference types="@sveltejs/kit" />

import type { ILazyLoadInstance } from 'vanilla-lazyload';

declare global {
	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}
}
