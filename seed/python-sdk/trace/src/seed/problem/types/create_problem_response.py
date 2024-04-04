# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...commons.types.problem_id import ProblemId
from ...core.pydantic_utilities import pydantic_v1
from .create_problem_error import CreateProblemError


class CreateProblemResponse_Success(pydantic_v1.BaseModel):
    type: typing.Literal["success"] = "success"
    value: ProblemId

    class Config:
        frozen = True
        smart_union = True


class CreateProblemResponse_Error(pydantic_v1.BaseModel):
    type: typing.Literal["error"] = "error"
    value: CreateProblemError

    class Config:
        frozen = True
        smart_union = True


CreateProblemResponse = typing.Union[CreateProblemResponse_Success, CreateProblemResponse_Error]