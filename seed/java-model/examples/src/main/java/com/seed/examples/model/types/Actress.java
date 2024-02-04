/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.model.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.examples.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = Actress.Builder.class)
public final class Actress {
    private final String name;

    private final String id;

    private Actress(String name, String id) {
        this.name = name;
        this.id = id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Actress && equalTo((Actress) other);
    }

    private boolean equalTo(Actress other) {
        return name.equals(other.name) && id.equals(other.id);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name, this.id);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        IdStage name(String name);

        Builder from(Actress other);
    }

    public interface IdStage {
        _FinalStage id(String id);
    }

    public interface _FinalStage {
        Actress build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, IdStage, _FinalStage {
        private String name;

        private String id;

        private Builder() {}

        @java.lang.Override
        public Builder from(Actress other) {
            name(other.getName());
            id(other.getId());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public IdStage name(String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public _FinalStage id(String id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        public Actress build() {
            return new Actress(name, id);
        }
    }
}