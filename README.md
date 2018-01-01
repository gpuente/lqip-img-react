## **LQIP for React** ##

Low Quality Image Placeholder for React is a component that allows you Lazy Load images using Medium load image effects

Check this out: https://jmperezperez.com/medium-image-progressive-loading-placeholder/

### Component Props ###

| Prop | Required | Type | Default Value | Description | Example |
|-------|------------|-------|------------------|---------------|-----------|
| aspectRatio | yes | string | "" | Defines the aspect ratio of your image. You should use the image dimentions in the format "WIDTHxHEIGHT" | "1280x720" |
| thumbnail | yes | string | "" | The path or url to your thumbnail image | "http://www.micdn.com/cats_thumbnail.jpeg" |
| src | yes | string | "" | The path or url to your image | "http://www.micdn.com/cats_.jpeg" |
| lazyLoad | no | string | "image" | This prop define how will work lazy load. You should use 1 of 3 values:   **image** - **all** - **none**. *image* applies lazy load only to your images (thumbnails will be loaded all at once). *all* applies lazy load to both, thumbnails and images. *none* disable lazy load. | "all" |
| color | no | string | "#B9E1DC" | The color for the box where the images and thumbnails will be loaded. | "#B9E1DC" |
| blur | no | number | 40 | The pixels number of blur effect in your thumbnail | 30 |
| alt | no | string | "" | alt value for your image | "something" |
