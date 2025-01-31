// @generated by protoc-gen-connect-es v0.12.0 with parameter "target=js+dts"
// @generated from file engine_service.proto (package engine_api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { CleanArgs, CleanResponse, CreateEnclaveArgs, CreateEnclaveResponse, DestroyEnclaveArgs, GetEnclavesResponse, GetEngineInfoResponse, GetExistingAndHistoricalEnclaveIdentifiersResponse, GetServiceLogsArgs, GetServiceLogsResponse, StopEnclaveArgs } from "./engine_service_pb.js";

/**
 * @generated from service engine_api.EngineService
 */
export declare const EngineService: {
  readonly typeName: "engine_api.EngineService",
  readonly methods: {
    /**
     * Endpoint for getting information about the engine, which is also what we use to verify that the engine has become available
     *
     * @generated from rpc engine_api.EngineService.GetEngineInfo
     */
    readonly getEngineInfo: {
      readonly name: "GetEngineInfo",
      readonly I: typeof Empty,
      readonly O: typeof GetEngineInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ==============================================================================================
     *                                   Enclave Management
     * ==============================================================================================
     * Creates a new Kurtosis Enclave
     *
     * @generated from rpc engine_api.EngineService.CreateEnclave
     */
    readonly createEnclave: {
      readonly name: "CreateEnclave",
      readonly I: typeof CreateEnclaveArgs,
      readonly O: typeof CreateEnclaveResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns information about the existing enclaves
     *
     * @generated from rpc engine_api.EngineService.GetEnclaves
     */
    readonly getEnclaves: {
      readonly name: "GetEnclaves",
      readonly I: typeof Empty,
      readonly O: typeof GetEnclavesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns information about all existing & historical enclaves
     *
     * @generated from rpc engine_api.EngineService.GetExistingAndHistoricalEnclaveIdentifiers
     */
    readonly getExistingAndHistoricalEnclaveIdentifiers: {
      readonly name: "GetExistingAndHistoricalEnclaveIdentifiers",
      readonly I: typeof Empty,
      readonly O: typeof GetExistingAndHistoricalEnclaveIdentifiersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Stops all containers in an enclave
     *
     * @generated from rpc engine_api.EngineService.StopEnclave
     */
    readonly stopEnclave: {
      readonly name: "StopEnclave",
      readonly I: typeof StopEnclaveArgs,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Destroys an enclave, removing all artifacts associated with it
     *
     * @generated from rpc engine_api.EngineService.DestroyEnclave
     */
    readonly destroyEnclave: {
      readonly name: "DestroyEnclave",
      readonly I: typeof DestroyEnclaveArgs,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets rid of old enclaves
     *
     * @generated from rpc engine_api.EngineService.Clean
     */
    readonly clean: {
      readonly name: "Clean",
      readonly I: typeof CleanArgs,
      readonly O: typeof CleanResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get service logs
     *
     * @generated from rpc engine_api.EngineService.GetServiceLogs
     */
    readonly getServiceLogs: {
      readonly name: "GetServiceLogs",
      readonly I: typeof GetServiceLogsArgs,
      readonly O: typeof GetServiceLogsResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

