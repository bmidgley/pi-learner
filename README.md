Learn Raspberry Pi coding with Jupyter
=====================================

The software for running and interacting with notebooks is **jupyter**. There is some historical background. Galileo wrote and illustrated the moons of Jupiter in a seminal article of scientific discourse and it provides for the inspiration of this project. Imagine being one of the first people to hold the illustration of the moons of Jupiter in one of the first scientific notebooks.

With that pioneering image in mind, try to get through some tedious setup.

Note the way we are using GPIOs and some packages below requires the latest system software, Raspian, installed on a Raspberry Pi 2 or newer. If you don't already have it, you can get Raspbian using [noobs](https://www.raspberrypi.org/downloads/noobs/) and install it using the [instructions](https://learn.adafruit.com/setting-up-a-raspberry-pi-with-noobs/download-noobs).

Open a shell. First, install jupyter and some requirements:

```
sudo apt-get install -y python3-pip
sudo pip3 install notebook ipywidgets
sudo jupyter nbextension enable --py --sys-prefix widgetsnbextension
```

Clone this repo and run it in Jupyter.

```
git clone https://github.com/bmidgley/pi-learner.git
cd pi-learner
jupyter notebook learner1.ipynb
```

A new browser window will appear and show the notebook so you can start coding. Watch for the magic.

Fine tuning
=====

Each exercise has a link to the next one. When you click the link, the new exercise appears in its own tab. You may want to close the old tab so the Pi can keep up with all the things you are doing.

You can view the exercises without the live coding [here](http://nbviewer.jupyter.org/github/bmidgley/pi-learner/blob/master/learner1.ipynb)

To start with a minimal header that can be scrolled offscreen, copy these custom settings and restart jupyter:

```
mkdir -p ~/.jupyter/custom
cp custom/* ~/.jupyter/custom/
```

If you are using an LCD with limited space, close chromium after it launches and relaunch with this:

```
chromium-browser --kiosk http://localhost:8888/notebooks/learner1.ipynb
```

This will use the whole screen and combined with the custom control above, will make the small screen much more usable.
