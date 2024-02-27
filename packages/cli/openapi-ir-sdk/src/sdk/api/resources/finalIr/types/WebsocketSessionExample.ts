/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

/**
 * A complete example associated with the websocket channel.
 */
export interface WebsocketSessionExample extends FernOpenapiIr.WithDescription {
    name: string | undefined;
    queryParameters: FernOpenapiIr.QueryParameterExample[] | undefined;
    headers: FernOpenapiIr.HeaderExample[] | undefined;
    messages: FernOpenapiIr.WebsocketMessageExample[];
}