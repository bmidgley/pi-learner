Note the way we are using GPIOs and some packages below requires the latest system software, Raspian, installed on a recent rpi. I'll try to address workarounds, but for now, let's assume you have the latest installed on your new rpi.

If you don't already have it, download Raspbian [here](https://www.raspberrypi.org/downloads/noobs/) and install it using the [instructions](https://learn.adafruit.com/setting-up-a-raspberry-pi-with-noobs/download-noobs).

The software for running and interacting with notebooks is **jupyter**. There is some historical background. Galileo wrote and illustrated the moons of Jupiter in a seminal article of scientific discourse and it provides for the inspiration of this project. Imagine being one of the first people to hold the illustration of the moons of Jupiter in one of the first scientific notebooks.

With that pioneering image in mind, try to get through some tedious setup.

Open a shell. First, install jupyter and some requirements:

```
sudo apt-get install python3-pip
sudo pip3 install notebook ipywidgets
sudo jupyter nbextension enable --py --sys-prefix widgetsnbextension
```

Hit enter when asked if you want to install dependencies.

Then download this notebook and run it.

```
wget https://dangernaut.com/coder1.ipynb
jupyter notebook coder1.ipynb
```

A new browser window will appear and show this document. You will start to notice it is special now. Watch for the magic.

