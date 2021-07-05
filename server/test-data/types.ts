// comment on line 0
export interface SuperInterface {}
export interface SomeInterface {}
export interface Comparable extends SuperInterface {}
export class Bar implements Comparable {}
export class Foo extends Bar implements SomeInterface {}
export class Zoo extends Foo implements SuperInterface { /*
    ...
*/}