import { Express } from 'express';

import { CS571Route } from "@cs571/s24-api-framework/src/interfaces/route";

export class CS571GetHelpRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/help';

    public constructor() { }

    public addRoute(app: Express): void {
        app.get(CS571GetHelpRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send([
                {method: "POST", endpoint: "/backings", purpose: "Add a backing to a specified company."},
                {method: "DELETE", endpoint: "/backings", purpose: "Resets individuals backings."},
                {method: "GET", endpoint: "/backees", purpose: "Get a list of all backees."},
                {method: "DELETE", endpoint: "/backees", purpose: "Delete all backees, can only be done by system admins."},
                {method: "GET", endpoint: "/help", purpose: "Gets a list of all the endpoints and their purposes."},
            ])
        })
    }

    public getRouteName(): string {
        return CS571GetHelpRoute.ROUTE_NAME;
    }
}