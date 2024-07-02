export function getBid(req: any) {
    const xid = req.header('X-CS571-ID');
    if (xid) {
        return xid;
    } else {
        const cook = req.cookies?.cs571_bid;
        if (cook) {
            try {
                const xidFromCook = JSON.parse(atob(cook.split(".")[1])).bid;
                if (xidFromCook) {
                    return xidFromCook.toLowerCase();
                } else {
                    return undefined;
                }
            } catch (e) {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
}