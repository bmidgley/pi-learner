Learn Raspberry Pi coding with Jupyter
=====================================

The software for running and interacting with notebooks is **jupyter**. There is some historical background. Galileo wrote and illustrated the moons of Jupiter in a seminal article of scientific discourse and it provides for the inspiration of this project. Imagine being one of the first people to hold the illustration of the moons of Jupiter in one of the first scientific notebooks.

With that pioneering image in mind, try to get through some tedious setup.

Note the way we are using GPIOs and some packages below requires the latest system software, Raspian, installed on a Raspberry Pi 2 or newer. If you don't already have it, you can get Raspbian using [noobs](https://www.raspberrypi.org/downloads/noobs/) and install it using the [instructions](https://learn.adafruit.com/setting-up-a-raspberry-pi-with-noobs/download-noobs).

Open a shell. First, install jupyter and some requirements:

```
sudo apt-get install python3-pip
sudo pip3 install notebook ipywidgets
sudo jupyter nbextension enable --py --sys-prefix widgetsnbextension
```

Hit enter when asked if you want to install dependencies.

Then download this notebook and run it.

```
git clone https://github.com/bmidgley/pi-learner.git
cd pi-learner
jupyter notebook learner1.ipynb
```

A new browser window will appear and show the notebook so you can start coding. Watch for the magic.

You can view the exercises as well using [nbviewer](http://nbviewer.jupyter.org/github/bmidgley/pi-learner/blob/master/learner1.ipynb)

To use control-; and control-. to hide and show the banner:

```
cp custom.js ~/.ipython/profile_name/static/custom/
```
