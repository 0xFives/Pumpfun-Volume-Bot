import prettyChangelogLogger from "prettier-logger";

const logger = {
  info: (msg: string, ...args: unknown[]) =>
    prettyChangelogLogger.info(msg, ...args),
  warn: (msg: string, ...args: unknown[]) =>
    prettyChangelogLogger.warn(msg, ...args),
  error: (msg: string, ...args: unknown[]) =>
    prettyChangelogLogger.error(msg, ...args),
};

export default logger;