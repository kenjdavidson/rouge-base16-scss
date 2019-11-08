---
title: Sass Frameworks
permalink: /docs/examples/
---

If you're using a (Sass built) CSS framework like [Bootstrap](https://getbootstrap.com/), [Foundation](https://foundation.zurb.com/sites/docs/sass.html), [Sierra CSS](https://sierra-library.github.io/), etc. there is a constant theme of overriding the themes default color values:

## Bootstrap 

Bootstrap provides a information on theming (and variables) for customization when using their Sass configuration.  ([ttps://getbootstrap.com/docs/4.0/getting-started/theming](https://getbootstrap.com/docs/4.0/getting-started/theming) provides some high level information on theming:

{% highlight sass %}
// Your variable overrides
$body-bg: #000;
$body-color: #111;

// Bootstrap and its default variables
@import "node_modules/bootstrap/scss/bootstrap";
{% endhighlight %}

After creating and building the `$base16-scheme` map you would:

{% highlight sass %}
// Your variable overrides
$body-bg: map-get($base16-scheme, base00);    
$body-color: map-get($base16-scheme, base04;

// Bootstrap and its default variables
@import "node_modules/bootstrap/scss/bootstrap";
{% endhighlight %}

## Foundation

Foundation provides the (colour palette)[https://foundation.zurb.com/sites/docs/global.html] for modifying themes:

{% highlight sass %}
$foundation-palette: (
  primary: map-get($base16-scheme, base09);,
  secondary: map-get($base16-scheme, base0A);,
  success: #3adb76,
  warning: #ffae00,
  alert: #cc4b37,
);
{% endhighlight %}

## Sierra

[Sierra](https://github.com/sierra-library/sierra) is a framework that I recently started using for a Jekyll theme and wanted to include it in the list (even if a little selfish).  A listing of all customizable settings for the framework can be found at [https://github.com/sierra-library/sierra/blob/master/src/_settings.scss#L8](https://github.com/sierra-library/sierra/blob/master/src/_settings.scss#L8).

{% highlight sass %}
$c-text: map-get($base16-scheme, base01);
$c-link: map-get($base16-scheme, base0A) !default;
$c-link-hover: rgba($c-primary, .8) !default;
{% endhighlight %}