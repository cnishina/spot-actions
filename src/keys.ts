/**
 * Keys and key combinations commonly used in tests. Most of these
 * are direct exports from webdriver keys, and in most cases users should
 * grab keys directly from there instead of adding new exports to this file.
 */
import {Key} from 'selenium-webdriver';

export const CLEAR = Key.CONTROL + Key.END + Key.SHIFT + Key.HOME +
    Key.NULL /* Release modifier keys. */ + Key.DELETE;
export const ENTER = Key.ENTER;
export const TAB = Key.TAB;
