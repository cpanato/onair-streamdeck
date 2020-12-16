# OnAir Stream Deck

# How it works?

It uses an external Hardware (see `hardware` directory) to notify when you are `On Air`

in action: https://twitter.com/comedordexis/status/1268549324092387340

With any StreamDeck you just install the latest release and then configure the IP address from the hardware you setup and that is it


# How to setup the dev environment

1. Install all the dependencies

```bash
yarn
```

2. Build the project for the first time, the project uses [Parcel as bundler](https://parceljs.org/) to handle React and TypeScript

```bash
yarn build
```

3. Package the plugin

```bash
./tools/mac/DistributionTool -b -i ./dist/dev.cpanato.onair.sdPlugin -o ./release/
```

# References

- [Steam Deck SDK docs](https://developer.elgato.com/documentation/)

# Contributing

Feel free to send in any pull requests.
