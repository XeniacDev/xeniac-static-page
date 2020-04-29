# Xeniac Static Portfolio Page
Simple portfolio page using gsap animations for xeniac
[live demo](https://xeniacdev.github.io/xeniac-static-page/)


## css variables

| variable | description |
|--|--|
| --font-size | change page's base font size |
| --font-family | change default font-family |
| --primary-color | change text-primary-color |
| --hero-bg | change the color or add a photo to the hero section  |

## how to use

1. create a repository

2. copy index.html from [here](https://github.com/XeniacDev/xeniac-static-page/blob/master/index.html)

3. modify texts based on your needs

4. you are good to go

## remove webgl(vanta) animation
simply remove code below from the end of the index.html
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/100/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/tengbao/vanta@master/dist/vanta.halo.min.js"></script>
    <script>
        VANTA.HALO({
            el: "#x-hero-layout",
            mouseControls: true,
            touchControls: true,
            minHeight: 100.0,
            minWidth: 100.0,
            size: 1.5,
            backgroundColor: 0x0
        });
</script>
```

