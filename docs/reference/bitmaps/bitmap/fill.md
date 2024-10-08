# fill

Set all the pixels of a bitmap to one color.

```sig
bitmap.create(0,0).fill(0)
```

## Parameters

* **c**: the [number](/types/number) of the color to set all the pixels in bitmap to. Color numbers are value between `0` and `15` which select a color from the current palette of colors.

## Example #example

Fill an entire bitmap with all blue pixels. Fill a small rectangle in the center of the bitmap with yellow pixels.

```blocks
let blueRect = bitmap.create(32, 32)
blueRect.fill(8)
blueRect.fillRect(8, 8, 16, 16, 5)
screen().drawBitmap(blueRect, 0, 0)
```

## See also #seealso

[fill rect](./fill-rect),
[replace](./replace)

```package
pxt-arcadeshield=github:microsoft/pxt-arcadeshield
```
