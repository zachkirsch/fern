# frozen_string_literal: true

require "ostruct"
require "json"

module SeedPaginationClient
  class Users
    class WithCursor
      # @return [String]
      attr_reader :cursor
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param cursor [String]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedPaginationClient::Users::WithCursor]
      def initialize(cursor: OMIT, additional_properties: nil)
        @cursor = cursor if cursor != OMIT
        @additional_properties = additional_properties
        @_field_set = { "cursor": cursor }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of WithCursor
      #
      # @param json_object [String]
      # @return [SeedPaginationClient::Users::WithCursor]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        cursor = parsed_json["cursor"]
        new(cursor: cursor, additional_properties: struct)
      end

      # Serialize an instance of WithCursor to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given
      #  hash and check each fields type against the current object's property
      #  definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.cursor&.is_a?(String) != false || raise("Passed value for field obj.cursor is not the expected type, validation failed.")
      end
    end
  end
end
