export class Identifier {
    private static readonly LENGTH: number = 30;
    private hash: string = "";

    constructor(hashHexString?: string) {
        if (hashHexString) {
            this.set(hashHexString);
        }
    }

    public static async create(): Promise<Identifier> {
        const randomString = this.generateRandomString(this.LENGTH);
        return this.createFromBytes(randomString);
    }

    [Symbol.toPrimitive](hint: string) {
        if (hint === "string") {
            return this.toString();
        }
        return this;
    }

    static createRandomIdentifier(): Identifier {
        return new Identifier(Identifier.generateRandomHexString(Identifier.LENGTH));
    }

    private static generateRandomString(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    private static generateRandomHexString(length: number): string {
        const hexChars = '0123456789abcdef';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
        }
        return result;
    }
    public static async createFromBytes(bytes: string): Promise<Identifier> {
        const hashed = await this.hashString(bytes);
        return new Identifier(hashed);
    }

    public static null(entityName: string): Promise<Identifier> {
        return this.createFromBytes(`${entityName}_null`);
    }

    public equals(other: Identifier): boolean {
        return this.hash === other.hash;
    }

    public isSet(): boolean {
        return !!this.hash;
    }

    public toString(): string {
        return this.hash.toUpperCase();
    }

    public toJSON(): string {
        return this.toString();
    }

    private set(hashHexString: string) {
        if (hashHexString.length >= Identifier.LENGTH && this.onlyContainsDigitsAndLetters(hashHexString)) {
            this.hash = hashHexString.substring(0, Identifier.LENGTH);
        }
    }

    private onlyContainsDigitsAndLetters(hashHexString: string): boolean {
        for (let i = 0; i < Identifier.LENGTH; i++) {
            const char = hashHexString.charAt(i);
            if (!char.match(/[0-9a-zA-Z]/)) {
                return false;
            }
        }
        return true;
    }

    private static async hashString(input: string): Promise<string> {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);

        const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Using SHA-256, Web Crypto doesn't support SHA-3
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }
}
