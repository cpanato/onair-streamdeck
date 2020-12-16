import React, { useState } from "react";

interface MainPIProps {
  action: string;
  save: (ops: { value: string; id: string }) => void;
  openUrl: (url: string) => void;
  websocket: WebSocket;
  settings: {
    account: string;
    server: string;
  };
}

export const MainPI: React.FC<MainPIProps> = (props: MainPIProps) => {
  const { save, openUrl, settings, websocket, action } = props;
  const [server, setServer] = useState(settings.server);

  return (
    <div>
      <div className="sdpi-item">
        <label className="sdpi-item-label">Server Endpoint*</label>
        <input
          className="sdpi-item-value"
          id="server"
          type="text"
          required
          value={server}
          onChange={(event) => {
            setServer(event.target.value);
            save({ value: event.target.value, id: "server" });
          }}
        />
      </div>

      <div className="sdpi-item">
        <button
          className="sdpi-item-value"
          id="github"
          onClick={() =>
            openUrl("https://github.com/cpanato/onair-streamdeck")
          }
        >
          How it works?
        </button>
      </div>
    </div>
  );
};
