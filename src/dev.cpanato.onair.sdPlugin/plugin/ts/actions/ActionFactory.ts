import { OnAir } from "./OnAir";
import { Bridge } from "../bridge/Bridge";

interface Options {
  action: string;
  settings: {
    branch?: string;
    server: string;
    token: string;
    domain?: string;
  };
  bridge: Bridge;
}

export class ActionFactory {
  static build({ action, settings, bridge }: Options) {
    switch (action) {
      case "dev.cpanato.onair":
        return new OnAir({ ...settings, bridge });
    }
  }
}
