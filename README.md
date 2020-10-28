# Food-Truckz
## A BEEFY BoyZ Application
![Screen Shot 2020-10-22 at 7 15 10 PM](https://user-images.githubusercontent.com/60681276/97395198-643e9380-18b2-11eb-97d8-44cadbedf35f.png)

**Your Life just got easier**:
> Welcome to Food-Truckz 
>the Austin application you have been waiting for.

##**link**

#**Motivation**

If there is one thing that has really blown up in Austin in the last 10 years is the food scene. From Westlake to East Austin, from North to South, in every neighborhood you will find a Food Truck. This application was created for that reason. A user friendly data base that will grow with you.  

#**Table of Content(#table-of-contents)**

- [Usage](#usage)
- [Development](#development)
    - [Adding to Chrome](#adding-to-chrome)
    - [Adding to Firefox](#adding-to-firefox)
- [Contribute](#contribute)

# Installation
[(Back to top)](#table-of-contents)



# Usage
[(Back to top)](#table-of-contents)
After adding the extension to Chrome/Firefox, it will light-up everytime you load a compatable website.

When a page is loaded, the extension would hide all the images in the page and only show images that have been classified as **NOT NSFW**.

You can toggle(off/on) the extension from the ```chrome://extensions``` page in Chrome and ```about:debugging#/runtime/this-firefox``` in Firefox.

Open popup window to change NSFW Filter settings

<p align="center">
  <img src="./demo/images/popup.png" alt="Popup window">
<p/>

# Development

Clone this repository and navigate inside the project folder and install the dependencies by running:

```sh
npm ci
```

After installing the dependencies, build the project by executing:

```sh
npm run build
```

Run the tests

```sh
npm run test
```

### Adding to Chrome

To install the developer version follow the steps below. To just use the extension download from [**chrome.google.com/webstore/nsfw-filter**](https://chrome.google.com/webstore/detail/nsfw-filter/kmgagnlkckiamnenbpigfaljmanlbbhh)

To run development version in clean environment use command:

```sh
npm run dev:chrome
```

Or open Google Chrome and open the Extension Management page by navigating to ```chrome://extensions``` or by opening Settings and clicking Extensions from the bottom left.

Enable Developer Mode by clicking the toggle switch next to Developer mode.

Click the "Load Unpacked" button and select the extension directory(```.../dist```).

<p align="center">
  <img src="./demo/images/install_instructions.png" alt="Install Instructions">
<p/>

Voila! The extension is now installed and ready to be used!

### Adding to Firefox

To install the developer version follow the steps below. To just use the extension download from [**addons.mozilla/nsfw-filter**](https://addons.mozilla.org/en-US/firefox/addon/nsfw-filter/)

To run development version in clean environment use command:

```sh
npm run dev:firefox
```

Or open Firefox and open the Debug Add-ons page by navigating to ```about:debugging#/runtime/this-firefox``` or by selecting it from Settings dropdown in the add-ons page.

Click Load Temporary Add-on and select the ```manifest.json``` file from the ```.../dist``` directory.

<p align="center">
  <img src="./demo/images/install_instructions_firefox.png" width="470px" alt="Install Instructions">
<p/>

That's it! The extension is now ready to be used in Firefox!
<!--



# Development
[(Back to top)](#table-of-contents)




# Contribute
[(Back to top)](#table-of-contents)


https://github.com/justinpricer

https://github.com/jasandper

https://github.com/rolara57





