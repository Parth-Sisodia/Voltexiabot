export function hasManageGuild(perm) {
    return (BigInt(perm) & (1n << 5n)) !== 0n;
}
