export enum AppErrorCode {
  UnknownError,
  FailedDependency,
}

export const errorMessages: Record<AppErrorCode, string> = {
  [AppErrorCode.UnknownError]: 'An unknown error has occurred',
  [AppErrorCode.FailedDependency]: 'Third party service failed to respond',
};
