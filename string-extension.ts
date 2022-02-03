interface String {
  shelgir(this: string): string;
  distance(this: string): string;
}

String.prototype.shelgir = function (this: string): string {
  return this + 'shelgir';
};
