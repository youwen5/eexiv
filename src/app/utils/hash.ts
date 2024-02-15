import crypto from 'crypto'

export default function hash(key: string) {
    // git style hash
    return crypto
        .createHash('sha256')
        .update(key)
        .digest('hex')
        .substring(0, 7)
}
