# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedAlias, SeedAlias


@pytest.fixture
def client() -> SeedAlias:
    return SeedAlias(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedAlias:
    return AsyncSeedAlias(base_url=os.getenv("TESTS_BASE_URL", "base_url"))