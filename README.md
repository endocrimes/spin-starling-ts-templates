# Spin `http-ts` Based on StarlingMonkey

## Installing the Template

The template can be installe using the command:

```bash
spin templates install --update --git https://github.com/karthik2804/spin-starling-ts-templates
```

## Creating a new app

```bash
spin new -t http-starling-ts hello-starling
```

## Setup Permission

`tools/componentize.sh` script is used to convert JS code into modules. Add execute permissions to it.

```bash
chmod +x tools/componentize.sh
```

## Building and Running the app

```bash
cd hello-starling
npm install
spin up --build
```