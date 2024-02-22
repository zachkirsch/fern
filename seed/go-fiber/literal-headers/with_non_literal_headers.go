// This file was auto-generated by Fern from our API Definition.

package literalheaders

type WithNonLiteralHeadersRequest struct {
	NonLiteralEndpointHeader string `header:"nonLiteralEndpointHeader"`
	literalEndpointHeader    string
	trueEndpointHeader       bool
}

func (w *WithNonLiteralHeadersRequest) LiteralEndpointHeader() string {
	return w.literalEndpointHeader
}

func (w *WithNonLiteralHeadersRequest) TrueEndpointHeader() bool {
	return w.trueEndpointHeader
}