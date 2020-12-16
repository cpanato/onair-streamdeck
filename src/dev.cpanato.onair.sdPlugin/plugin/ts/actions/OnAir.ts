import { Bridge } from "../bridge/Bridge";
import { Action, States } from "./Action";

interface Options {
  domain?: string;
  branch?: string;
  token: string;
  server: string;
  bridge: Bridge;
}

export class OnAir extends Action {
  private server: string;

  public constructor({ server, bridge }: Options) {
    super(bridge);
    this.server = server;
  }

  public async load() {
    try {
      const { status } = await fetch(this.server, {
        // headers: { authorization: `Bearer ${this.token}` },
      }).then((res) => res.json());

      if (status === '') {
        return { status: "not set" };
      }

      return { status: status };
    } catch {
      return { status: "error" };
    }
  }


  public isConfigured(): boolean {
    return !!this.server;
  }

  public getState({ status }: { status?: string | undefined }): number {
    if (status == "off") {
      return States.OFF;
    }

    if (status === "on") {
      return States.ON;
    }

    return States.DEFAULT;
  }
}
