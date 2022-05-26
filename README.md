# Wordelight
A Wordle clone with improve color contrast and accessibility

Background:

Wordle has become a national sensation in the USA in 2022, and the New York Times has gained tens of millions of
new subscribers after purchasing the Wordle app from its creator.

The New York Times has been losing subscribers over the past decade, and this venture into the gaming industry
has proven to be wildly successful. Thus, pivoting their focus to word based games may attract new subscribers
in the coming years as well.

The problem:

Wordle has both ligh/dark modes and a high contrast mode, but the high contrast mode has less contrast with inner text than the default mode.
There is a major contradiction here.

Why does this matter?

The New York Times provides articles, which means that users are expected to stare at their devices and read
thousands of words. Many users choose to read where there is plenty of ambient light to offset bluelight, but
other users may choose to wait until they come back from work, have dinner, wind down and have time at night.
Therefore, there may be less ambient light and even no light at all if users are reading in bed.

With the Wordle app becoming a national hit, many users wait until midnight for a new word to appear out of competition.
Thus, light and dark modes have become a quintessential aspect of the app because users play around the clock.
Further, color contrast has also become very important because ambient light can make white letters less legible
and dark mode palettes must strike a balance between maintaining contrast with a dark background and white text.

How can we fix this?

There are many avenues that you can take, but allow me to walk you through a rather simple path.
The main fix is to change the font color from white to black for light mode, and adjust the blue
and organe-brown color palette for dark mode. Just those two fixes and we will increase the light
mode contrast scores for the blue color by 568% and the orang-brown color by 280%. For dark mode,
the contrast scores will increase for the blue color by 270% and the orange-brown color by 165%.

Here's the plan:

Create-react-app version:
(Min 4 steps, max 6 steps. Approx. 3~4 hours. Project base cost: $500, expedited cost: $350)
(Upgraded service: designer/developer clickable documentations in Adobe XD. Approx. full 9 hour day. cost: $1000)

1. We will slightly adjust the high contrast colors in Adobe Color.
2. If users already like the default colors, we do not need to invest time changing the default green and yellow.
3. We will convert the brand colors to a JavaScript object that we can key into based on React context.
3. We will employ styled-components to adapt to React context.
4. We will simply change the font colors and background colors based on light/dark mode.
5. If local storage helper functions are not available, we will write new ones in the utils directory.
6. Test with users and see if the new colors need adjustments or the app is ready for shipping.

Server-side rendering version:
(Min 4 steps, max 6 steps. Approx. 6~7 hours. Project base cost: $700, expedited cost: $500)

1. We will slightly adjust the high contrast colors in Adobe Color.
2. If users already like the default colors, we do not need to invest time changing the default green and yellow.
3. If local storage helper functions are not available, we will write new ones in the utils directory.
4. We will create a CSS-module file to eliminate global style runtimes and avoid classname collisions.
5. We will chain conditional statements to determine classnames.
6. Test with users and see if the new colors need adjustments or the app is ready for shipping.
