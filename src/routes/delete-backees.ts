import fs from 'fs'

import { Express } from 'express';

import { CS571Route } from "@cs571/s24-api-framework/src/interfaces/route";
import BonusSecretConfig from '../model/configs/bonus-secret-config';

export class CS571DeleteBackeesRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/backees';

    private readonly config: BonusSecretConfig;

    public constructor(config: BonusSecretConfig) {
        this.config = config;
    }

    public addRoute(app: Express): void {
        app.delete(CS571DeleteBackeesRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send({
                msg: "Congrats! You completed the bonus-bonus CTF! The PIN code is below. 💎",
                code: fs.readFileSync(this.config.CODE_SECRET_FS).toString()
            })
        })
    }

    public getRouteName(): string {
        return CS571DeleteBackeesRoute.ROUTE_NAME;
    }
}