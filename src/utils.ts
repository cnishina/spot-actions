import { Session, WebDriver } from 'selenium-webdriver';
import { Executor, HttpClient } from 'selenium-webdriver/http';


export function getDriver(seleniumAddress: string,
    seleniumSessionId: string) {
  const httpClient = new HttpClient(seleniumAddress);
  const executor = new Executor(httpClient);
  const session = new Session(seleniumSessionId, null);
  return new WebDriver(session, executor);
}