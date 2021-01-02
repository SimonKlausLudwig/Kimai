/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface TeamCollection {
  id?: number
  name: string
}

export interface TeamEntity {
  id?: number
  name: string
  teamlead: User

  /** All team member, including the teamlead */
  users?: User[]

  /** All customers assigned to the team */
  customers?: Customer[]

  /** All projects assigned to the team */
  projects?: Project[]

  /** All activities assigned to the team */
  activities?: Activity[]
}

export interface TeamEditForm {
  /** Name of the team */
  name: string

  /** User ID for the teamlead */
  teamlead: number

  /** Array of team member IDs */
  users: number[]
}

export interface UserCollection {
  username?: string
  enabled?: boolean
  id?: number
  alias?: string
}

export interface UserEntity {
  username?: string
  enabled?: boolean
  roles?: string[]
  language?: string
  timezone?: string
  id?: number
  alias?: string
  title?: string
  avatar?: string
  teams?: Team[]
}

export interface User {
  username?: string
  enabled?: boolean
  id?: number
  alias?: string
}

export interface UserEditForm {
  alias?: string
  title?: string
  avatar?: string
  email: string
  language:
    | 'ar'
    | 'cs'
    | 'de'
    | 'de_CH'
    | 'da'
    | 'en'
    | 'eo'
    | 'es'
    | 'eu'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hu'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'pt_BR'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'tr'
    | 'vi'
    | 'zh_CN'
  timezone: string
  enabled?: boolean
  roles?: ('ROLE_TEAMLEAD' | 'ROLE_ADMIN' | 'ROLE_SUPER_ADMIN')[]
}

export interface UserCreateForm {
  username: string
  alias?: string
  title?: string
  avatar?: string
  email: string
  language:
    | 'ar'
    | 'cs'
    | 'de'
    | 'de_CH'
    | 'da'
    | 'en'
    | 'eo'
    | 'es'
    | 'eu'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hu'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'pt_BR'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'tr'
    | 'vi'
    | 'zh_CN'
  timezone: string
  enabled?: boolean

  /** Plain text password */
  plainPassword: string
  roles?: ('ROLE_TEAMLEAD' | 'ROLE_ADMIN' | 'ROLE_SUPER_ADMIN')[]
}

export interface TimesheetCollectionExpanded {
  user?: number
  tags?: string[]
  id?: number
  begin: string
  end?: string
  duration?: number
  activity: ActivityExpanded
  project: ProjectExpanded
  description?: string
  rate?: number
  internalRate?: number

  /** All visible meta (custom) fields registered with this timesheet */
  metaFields?: TimesheetMeta[]
}

export interface TimesheetCollection {
  activity?: number
  project?: number
  user?: number
  tags?: string[]
  id?: number
  begin: string
  end?: string
  duration?: number
  description?: string
  rate?: number
  internalRate?: number

  /** All visible meta (custom) fields registered with this timesheet */
  metaFields?: TimesheetMeta[]
}

export interface TimesheetEntityExpanded {
  user?: number
  tags?: string[]
  id?: number
  begin: string
  end?: string
  duration?: number
  activity: ActivityExpanded
  project: ProjectExpanded
  description?: string
  rate?: number
  internalRate?: number
  fixedRate?: number
  hourlyRate?: number
  exported: boolean

  /** All visible meta (custom) fields registered with this timesheet */
  metaFields?: TimesheetMeta[]
}

export interface TimesheetEntity {
  activity?: number
  project?: number
  user?: number
  tags?: string[]
  id?: number
  begin: string
  end?: string
  duration?: number
  description?: string
  rate?: number
  internalRate?: number
  fixedRate?: number
  hourlyRate?: number
  exported: boolean

  /** All visible meta (custom) fields registered with this timesheet */
  metaFields?: TimesheetMeta[]
}

export interface TimesheetEditForm {
  begin: string
  end?: string
  duration?: string

  /** Project ID */
  project: number

  /** Activity ID */
  activity: number
  description?: string

  /** Comma separated list of tags */
  tags?: string

  /** Fixed rate */
  fixedRate?: number

  /** Hourly rate */
  hourlyRate?: number

  /** User ID */
  user?: number
  exported?: boolean
}

export interface TagEntity {
  id?: number
  name: string
  color?: string
}

export interface TagEditForm {
  /** The tag name (forbidden character: comma) */
  name: string

  /** The hexadecimal color code (default: #d2d6de) */
  color: string
}

export interface ActivityCollection {
  parentTitle?: string
  project?: number
  id?: number
  name: string
  visible: boolean

  /** All visible meta (custom) fields registered with this activity */
  metaFields?: ActivityMeta[]

  /** If no team is assigned, everyone can access the activity */
  teams?: Team[]
  color?: string
}

export interface ActivityRateForm {
  /** User ID */
  user?: number

  /** The rate (eg. 10.5) */
  rate: number

  /** The internal rate (eg. 10.0 or 10) */
  internalRate?: number

  /** If "true" each time record gets the same rate, regardless of its duration */
  isFixed?: boolean
}

export interface ActivityRate {
  id?: number
  user?: User
  rate?: number
  internalRate?: number
  isFixed: boolean
}

export interface ActivityExpanded {
  id?: number
  project?: Project
  name: string
  visible: boolean
  color?: string
}

export interface Activity {
  project?: number
  id?: number
  name: string
  visible: boolean
  color?: string
}

export interface ActivityEntity {
  parentTitle?: string
  project?: number
  id?: number
  name: string
  comment?: string
  visible: boolean
  budget: number
  timeBudget: number

  /** All visible meta (custom) fields registered with this activity */
  metaFields?: ActivityMeta[]

  /** If no team is assigned, everyone can access the activity */
  teams?: Team[]
  color?: string
}

export interface ActivityEditForm {
  name: string
  comment?: string

  /** Project ID */
  project?: number

  /** The hexadecimal color code (default: #d2d6de) */
  color?: string
  visible?: boolean
}

export interface ProjectCollection {
  parentTitle?: string
  customer?: number
  id?: number
  name: string
  start?: string
  end?: string
  visible: boolean

  /** All visible meta (custom) fields registered with this project */
  metaFields?: ProjectMeta[]

  /** If no team is assigned, everyone can access the project (also depends on the teams of the customer) */
  teams?: Team[]
  color?: string
}

export interface ProjectRateForm {
  /** User ID */
  user?: number

  /** The rate (eg. 10.5) */
  rate: number

  /** The internal rate (eg. 10.0 or 10) */
  internalRate?: number

  /** If "true" each time record gets the same rate, regardless of its duration */
  isFixed?: boolean
}

export interface ProjectRate {
  id?: number
  user?: User
  rate?: number
  internalRate?: number
  isFixed: boolean
}

export interface ProjectExpanded {
  id?: number
  customer: Customer
  name: string
  visible: boolean
  color?: string
}

export interface Project {
  customer?: number
  id?: number
  name: string
  visible: boolean
  color?: string
}

export interface ProjectEntity {
  parentTitle?: string
  customer?: number
  id?: number
  name: string
  orderNumber?: string
  orderDate?: string
  start?: string
  end?: string
  comment?: string
  visible: boolean
  budget: number
  timeBudget: number

  /** All visible meta (custom) fields registered with this project */
  metaFields?: ProjectMeta[]

  /** If no team is assigned, everyone can access the project (also depends on the teams of the customer) */
  teams?: Team[]
  color?: string
}

export interface ProjectEditForm {
  name: string
  comment?: string
  orderNumber?: string
  orderDate?: string
  start?: string
  end?: string

  /** Customer ID */
  customer: number

  /** The hexadecimal color code (default: #d2d6de) */
  color?: string
  visible?: boolean
}

export interface CustomerCollection {
  id?: number
  name: string
  visible: boolean
  currency: string

  /** All visible meta (custom) fields registered with this customer */
  metaFields?: CustomerMeta[]

  /** If no team is assigned, everyone can access the customer */
  teams?: Team[]
  color?: string
}

export interface CustomerRateForm {
  /** User ID */
  user?: number

  /** The rate (eg. 10.5) */
  rate: number

  /** The internal rate (eg. 10.0 or 10) */
  internalRate?: number

  /** If "true" each time record gets the same rate, regardless of its duration */
  isFixed?: boolean
}

export interface CustomerRate {
  id?: number
  user?: User
  rate?: number
  internalRate?: number
  isFixed: boolean
}

export interface Customer {
  id?: number
  name: string
  visible: boolean
  color?: string
}

export interface CustomerEntity {
  id?: number
  name: string
  number?: string
  comment?: string
  visible: boolean
  company?: string
  vatId?: string
  contact?: string
  address?: string
  country: string
  currency: string
  phone?: string
  fax?: string
  mobile?: string

  /** Limited via RFC to 254 chars */
  email?: string
  homepage?: string

  /** Length was determined by a MySQL column via "use mysql;describe time_zone_name;" */
  timezone: string
  budget: number
  timeBudget: number

  /** All visible meta (custom) fields registered with this customer */
  metaFields?: CustomerMeta[]

  /** If no team is assigned, everyone can access the customer */
  teams?: Team[]
  color?: string
}

export interface CustomerEditForm {
  name: string
  number?: string
  comment?: string
  company?: string
  vatId?: string
  contact?: string
  address?: string
  country: string
  currency: string
  phone?: string
  fax?: string
  mobile?: string
  email?: string
  homepage?: string
  timezone: string

  /** The hexadecimal color code (default: #d2d6de) */
  color?: string
  visible?: boolean
}

export interface I18NConfig {
  formDateTime?: string
  formDate?: string
  dateTime?: string
  date?: string
  time?: string
  duration?: string
  is24hours?: boolean
  now?: string
}

export interface TimesheetConfig {
  trackingMode?: string
  defaultBeginTime?: string
  activeEntriesHardLimit?: number
  activeEntriesSoftLimit?: number
  isAllowFutureTimes?: boolean
  isAllowOverlapping?: boolean
}

export interface Version {
  version?: string
  candidate?: string
  semver?: string
  name?: string
  copyright?: string
}

export interface Team {
  id?: number
  name: string
}

export interface TimesheetMeta {
  name: string
  value?: string
}

export interface ActivityMeta {
  name: string
  value?: string
}

export interface ProjectMeta {
  name: string
  value?: string
}

export interface CustomerMeta {
  name: string
  value?: string
}

export type RequestParams = Omit<RequestInit, 'body' | 'method'> & {
  secure?: boolean
}

export type RequestQueryParamsType = Record<string | number, any>

interface ApiConfig<SecurityDataType> {
  baseUrl?: string
  baseApiParams?: RequestParams
  securityWorker?: (securityData: SecurityDataType) => RequestParams
}

interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D | null
  error: E | null
}

enum BodyType {
  Json
}

class HttpClient<SecurityDataType> {
  public baseUrl: string = '//demo.kimai.org'
  private securityData: SecurityDataType = null as any
  private securityWorker: null | ApiConfig<SecurityDataType>['securityWorker'] = null

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data
  }

  private addQueryParam(query: RequestQueryParamsType, key: string) {
    return (
      encodeURIComponent(key) +
      '=' +
      encodeURIComponent(Array.isArray(query[key]) ? query[key].join(',') : query[key])
    )
  }

  protected addQueryParams(rawQuery?: RequestQueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key])
    return keys.length
      ? `?${keys
          .map(key =>
            typeof query[key] === 'object' && !Array.isArray(query[key])
              ? this.addQueryParams(query[key] as object).substring(1)
              : this.addQueryParam(query, key)
          )
          .join('&')}`
      : ''
  }

  private bodyFormatters: Record<BodyType, (input: any) => any> = {
    [BodyType.Json]: JSON.stringify
  }

  private mergeRequestOptions(
    params: RequestParams,
    securityParams?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params,
      ...(securityParams || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params.headers || {}),
        ...((securityParams && securityParams.headers) || {})
      }
    }
  }

  private safeParseResponse = <T = any, E = any>(
    response: Response
  ): Promise<HttpResponse<T, E>> => {
    const r = response as HttpResponse<T, E>
    r.data = null
    r.error = null

    return response
      .json()
      .then(data => {
        if (r.ok) {
          r.data = data
        } else {
          r.error = data
        }
        return r
      })
      .catch(e => {
        r.error = e
        return r
      })
  }

  public request = <T = any, E = any>(
    path: string,
    method: string,
    { secure, ...params }: RequestParams = {},
    body?: any,
    bodyType?: BodyType,
    secureByDefault?: boolean
  ): Promise<HttpResponse<T>> => {
    const requestUrl = `${this.baseUrl}${path}`
    const secureOptions =
      (secureByDefault || secure) && this.securityWorker
        ? this.securityWorker(this.securityData)
        : {}
    const requestOptions = {
      ...this.mergeRequestOptions(params, secureOptions),
      method,
      body: body ? this.bodyFormatters[bodyType || BodyType.Json](body) : null
    }

    return fetch(requestUrl, requestOptions).then(async response => {
      const data = await this.safeParseResponse<T, E>(response)
      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title Kimai 2 - API Docs
 * @version 0.6
 * @baseUrl //demo.kimai.org
 * JSON API for the Kimai 2 time-tracking software: [API documentation](https://www.kimai.org/documentation/rest-api.html), [Swagger definition file](doc.json)
 */
export class Api<SecurityDataType = any> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @tags Activity
     * @name activitiesMetaPartialUpdate
     * @summary Sets the value of a meta-field for an existing activity
     * @request PATCH:/api/activities/{id}/meta
     * @secure
     */
    activitiesMetaPartialUpdate: (
      id: number,
      body: { name: string; value: string },
      params?: RequestParams
    ) =>
      this.request<ActivityEntity, any>(
        `/api/activities/${id}/meta`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesList
     * @summary Returns a collection of activities
     * @request GET:/api/activities
     * @secure
     */
    activitiesList: (
      query?: {
        project?: string
        projects?: string
        visible?: string
        globals?: string
        globalsFirst?: string
        orderBy?: string
        order?: string
        term?: string
      },
      params?: RequestParams
    ) =>
      this.request<ActivityCollection[], any>(
        `/api/activities${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesCreate
     * @summary Creates a new activity
     * @request POST:/api/activities
     * @secure
     * @description Creates a new activity and returns it afterwards
     */
    activitiesCreate: (body: ActivityEditForm, params?: RequestParams) =>
      this.request<ActivityEntity, any>(
        `/api/activities`,
        'POST',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesDetail
     * @summary Returns one activity
     * @request GET:/api/activities/{id}
     * @secure
     */
    activitiesDetail: (id: number, params?: RequestParams) =>
      this.request<ActivityEntity, any>(
        `/api/activities/${id}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesPartialUpdate
     * @summary Update an existing activity
     * @request PATCH:/api/activities/{id}
     * @secure
     * @description Update an existing activity, you can pass all or just a subset of all attributes
     */
    activitiesPartialUpdate: (id: number, body: ActivityEditForm, params?: RequestParams) =>
      this.request<ActivityEntity, any>(
        `/api/activities/${id}`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesRatesDetail
     * @summary Returns a collection of all rates for one activity
     * @request GET:/api/activities/{id}/rates
     * @secure
     */
    activitiesRatesDetail: (id: number, params?: RequestParams) =>
      this.request<ActivityRate[], any>(
        `/api/activities/${id}/rates`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesRatesCreate
     * @summary Adds a new rate to an activity
     * @request POST:/api/activities/{id}/rates
     * @secure
     */
    activitiesRatesCreate: (id: number, body: ActivityRateForm, params?: RequestParams) =>
      this.request<ActivityRate, any>(
        `/api/activities/${id}/rates`,
        'POST',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Activity
     * @name activitiesRatesDelete
     * @summary Deletes one rate for an activity
     * @request DELETE:/api/activities/{id}/rates/{rateId}
     * @secure
     */
    activitiesRatesDelete: (id: number, rateId: number, params?: RequestParams) =>
      this.request<any, any>(
        `/api/activities/${id}/rates/${rateId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Default
     * @name configI18NList
     * @summary Returns the user specific locale configuration
     * @request GET:/api/config/i18n
     * @secure
     */
    configI18NList: (params?: RequestParams) =>
      this.request<I18NConfig, any>(`/api/config/i18n`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags Default
     * @name configTimesheetList
     * @summary Returns the timesheet configuration
     * @request GET:/api/config/timesheet
     * @secure
     */
    configTimesheetList: (params?: RequestParams) =>
      this.request<TimesheetConfig, any>(
        `/api/config/timesheet`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersMetaPartialUpdate
     * @summary Sets the value of a meta-field for an existing customer
     * @request PATCH:/api/customers/{id}/meta
     * @secure
     */
    customersMetaPartialUpdate: (
      id: number,
      body: { name: string; value: string },
      params?: RequestParams
    ) =>
      this.request<CustomerEntity, any>(
        `/api/customers/${id}/meta`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersList
     * @summary Returns a collection of customers
     * @request GET:/api/customers
     * @secure
     */
    customersList: (
      query?: { visible?: string; order?: string; orderBy?: string; term?: string },
      params?: RequestParams
    ) =>
      this.request<CustomerCollection[], any>(
        `/api/customers${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersCreate
     * @summary Creates a new customer
     * @request POST:/api/customers
     * @secure
     * @description Creates a new customer and returns it afterwards
     */
    customersCreate: (body: CustomerEditForm, params?: RequestParams) =>
      this.request<CustomerEntity, any>(
        `/api/customers`,
        'POST',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersDetail
     * @summary Returns one customer
     * @request GET:/api/customers/{id}
     * @secure
     */
    customersDetail: (id: string, params?: RequestParams) =>
      this.request<CustomerEntity, any>(
        `/api/customers/${id}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersPartialUpdate
     * @summary Update an existing customer
     * @request PATCH:/api/customers/{id}
     * @secure
     * @description Update an existing customer, you can pass all or just a subset of all attributes
     */
    customersPartialUpdate: (id: number, body: CustomerEditForm, params?: RequestParams) =>
      this.request<CustomerEntity, any>(
        `/api/customers/${id}`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersRatesDetail
     * @summary Returns a collection of all rates for one customer
     * @request GET:/api/customers/{id}/rates
     * @secure
     */
    customersRatesDetail: (id: number, params?: RequestParams) =>
      this.request<CustomerRate[], any>(
        `/api/customers/${id}/rates`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersRatesCreate
     * @summary Adds a new rate to a customer
     * @request POST:/api/customers/{id}/rates
     * @secure
     */
    customersRatesCreate: (id: number, body: CustomerRateForm, params?: RequestParams) =>
      this.request<CustomerRate, any>(
        `/api/customers/${id}/rates`,
        'POST',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Customer
     * @name customersRatesDelete
     * @summary Deletes one rate for an customer
     * @request DELETE:/api/customers/{id}/rates/{rateId}
     * @secure
     */
    customersRatesDelete: (id: number, rateId: number, params?: RequestParams) =>
      this.request<any, any>(
        `/api/customers/${id}/rates/${rateId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsMetaPartialUpdate
     * @summary Sets the value of a meta-field for an existing project
     * @request PATCH:/api/projects/{id}/meta
     * @secure
     */
    projectsMetaPartialUpdate: (
      id: number,
      body: { name: string; value: string },
      params?: RequestParams
    ) =>
      this.request<ProjectEntity, any>(
        `/api/projects/${id}/meta`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsList
     * @summary Returns a collection of projects.
     * @request GET:/api/projects
     * @secure
     */
    projectsList: (
      query?: {
        customer?: string
        customers?: string
        visible?: string
        start?: string
        end?: string
        ignoreDates?: string
        order?: string
        orderBy?: string
        term?: string
      },
      params?: RequestParams
    ) =>
      this.request<ProjectCollection[], any>(
        `/api/projects${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsCreate
     * @summary Creates a new project
     * @request POST:/api/projects
     * @secure
     * @description Creates a new project and returns it afterwards
     */
    projectsCreate: (body: ProjectEditForm, params?: RequestParams) =>
      this.request<ProjectEntity, any>(`/api/projects`, 'POST', params, body, BodyType.Json, true),

    /**
     * @tags Project
     * @name projectsDetail
     * @summary Returns one project
     * @request GET:/api/projects/{id}
     * @secure
     */
    projectsDetail: (id: string, params?: RequestParams) =>
      this.request<ProjectEntity, any>(
        `/api/projects/${id}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsPartialUpdate
     * @summary Update an existing project
     * @request PATCH:/api/projects/{id}
     * @secure
     * @description Update an existing project, you can pass all or just a subset of all attributes
     */
    projectsPartialUpdate: (id: number, body: ProjectEditForm, params?: RequestParams) =>
      this.request<ProjectEntity, any>(
        `/api/projects/${id}`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsRatesDetail
     * @summary Returns a collection of all rates for one project
     * @request GET:/api/projects/{id}/rates
     * @secure
     */
    projectsRatesDetail: (id: number, params?: RequestParams) =>
      this.request<ProjectRate[], any>(
        `/api/projects/${id}/rates`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsRatesCreate
     * @summary Adds a new rate to an project
     * @request POST:/api/projects/{id}/rates
     * @secure
     */
    projectsRatesCreate: (id: number, body: ProjectRateForm, params?: RequestParams) =>
      this.request<ProjectRate, any>(
        `/api/projects/${id}/rates`,
        'POST',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Project
     * @name projectsRatesDelete
     * @summary Deletes one rate for an project
     * @request DELETE:/api/projects/{id}/rates/{rateId}
     * @secure
     */
    projectsRatesDelete: (id: number, rateId: number, params?: RequestParams) =>
      this.request<any, any>(
        `/api/projects/${id}/rates/${rateId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Default
     * @name pingList
     * @summary A testing route for the API
     * @request GET:/api/ping
     * @secure
     */
    pingList: (params?: RequestParams) =>
      this.request<any, any>(`/api/ping`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags Default
     * @name versionList
     * @summary Returns information about the Kimai release
     * @request GET:/api/version
     * @secure
     */
    versionList: (params?: RequestParams) =>
      this.request<Version, any>(`/api/version`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags Tag
     * @name tagsList
     * @summary Fetch all existing tags
     * @request GET:/api/tags
     * @secure
     */
    tagsList: (query?: { name?: string }, params?: RequestParams) =>
      this.request<string[], any>(
        `/api/tags${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Tag
     * @name tagsCreate
     * @summary Creates a new tag
     * @request POST:/api/tags
     * @secure
     * @description Creates a new tag and returns it afterwards
     */
    tagsCreate: (body: TagEditForm, params?: RequestParams) =>
      this.request<TagEntity, any>(`/api/tags`, 'POST', params, body, BodyType.Json, true),

    /**
     * @tags Tag
     * @name tagsDelete
     * @summary Delete a tag
     * @request DELETE:/api/tags/{id}
     * @secure
     */
    tagsDelete: (id: number, params?: RequestParams) =>
      this.request<any, any>(`/api/tags/${id}`, 'DELETE', params, null, BodyType.Json, true),

    /**
     * @tags Team
     * @name teamsList
     * @summary Fetch all existing teams
     * @request GET:/api/teams
     * @secure
     */
    teamsList: (params?: RequestParams) =>
      this.request<TeamCollection[], any>(`/api/teams`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags Team
     * @name teamsCreate
     * @summary Creates a new team
     * @request POST:/api/teams
     * @secure
     * @description Creates a new team and returns it afterwards
     */
    teamsCreate: (body: TeamEditForm, params?: RequestParams) =>
      this.request<TeamEntity, any>(`/api/teams`, 'POST', params, body, BodyType.Json, true),

    /**
     * @tags Team
     * @name teamsDetail
     * @summary Returns one team
     * @request GET:/api/teams/{id}
     * @secure
     */
    teamsDetail: (id: string, params?: RequestParams) =>
      this.request<TeamEntity, any>(`/api/teams/${id}`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags Team
     * @name teamsPartialUpdate
     * @summary Update an existing team
     * @request PATCH:/api/teams/{id}
     * @secure
     * @description Update an existing team, you can pass all or just a subset of all attributes (passing users will replace all existing ones)
     */
    teamsPartialUpdate: (id: number, body: TeamEditForm, params?: RequestParams) =>
      this.request<TeamEntity, any>(`/api/teams/${id}`, 'PATCH', params, body, BodyType.Json, true),

    /**
     * @tags Team
     * @name teamsDelete
     * @summary Delete a team
     * @request DELETE:/api/teams/{id}
     * @secure
     */
    teamsDelete: (id: number, params?: RequestParams) =>
      this.request<any, any>(`/api/teams/${id}`, 'DELETE', params, null, BodyType.Json, true),

    /**
     * @tags Team
     * @name teamsMembersCreate
     * @summary Add a new member to a team
     * @request POST:/api/teams/{id}/members/{userId}
     * @secure
     */
    teamsMembersCreate: (id: number, userId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/members/${userId}`,
        'POST',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsMembersDelete
     * @summary Removes a member from the team
     * @request DELETE:/api/teams/{id}/members/{userId}
     * @secure
     */
    teamsMembersDelete: (id: number, userId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/members/${userId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsCustomersCreate
     * @summary Grant the team access to a customer
     * @request POST:/api/teams/{id}/customers/{customerId}
     * @secure
     */
    teamsCustomersCreate: (id: number, customerId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/customers/${customerId}`,
        'POST',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsCustomersDelete
     * @summary Revokes access for a customer from a team
     * @request DELETE:/api/teams/{id}/customers/{customerId}
     * @secure
     */
    teamsCustomersDelete: (id: number, customerId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/customers/${customerId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsProjectsCreate
     * @summary Grant the team access to a project
     * @request POST:/api/teams/{id}/projects/{projectId}
     * @secure
     */
    teamsProjectsCreate: (id: number, projectId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/projects/${projectId}`,
        'POST',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsProjectsDelete
     * @summary Revokes access for a project from a team
     * @request DELETE:/api/teams/{id}/projects/{projectId}
     * @secure
     */
    teamsProjectsDelete: (id: number, projectId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/projects/${projectId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsActivitiesCreate
     * @summary Grant the team access to an activity
     * @request POST:/api/teams/{id}/activities/{activityId}
     * @secure
     */
    teamsActivitiesCreate: (id: number, activityId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/activities/${activityId}`,
        'POST',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Team
     * @name teamsActivitiesDelete
     * @summary Revokes access for an activity from a team
     * @request DELETE:/api/teams/{id}/activities/{activityId}
     * @secure
     */
    teamsActivitiesDelete: (id: number, activityId: number, params?: RequestParams) =>
      this.request<TeamEntity, any>(
        `/api/teams/${id}/activities/${activityId}`,
        'DELETE',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsRecentList
     * @summary Returns the collection of recent user activities
     * @request GET:/api/timesheets/recent
     * @secure
     */
    timesheetsRecentList: (
      query?: { user?: string; begin?: string; size?: string },
      params?: RequestParams
    ) =>
      this.request<TimesheetCollectionExpanded[], any>(
        `/api/timesheets/recent${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsActiveList
     * @summary Returns the collection of active timesheet records
     * @request GET:/api/timesheets/active
     * @secure
     */
    timesheetsActiveList: (params?: RequestParams) =>
      this.request<TimesheetCollectionExpanded[], any>(
        `/api/timesheets/active`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsStopPartialUpdate
     * @summary Stops an active timesheet record
     * @request PATCH:/api/timesheets/{id}/stop
     * @secure
     */
    timesheetsStopPartialUpdate: (id: number, params?: RequestParams) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}/stop`,
        'PATCH',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsRestartPartialUpdate
     * @summary Restarts a previously stopped timesheet record for the current user
     * @request PATCH:/api/timesheets/{id}/restart
     * @secure
     */
    timesheetsRestartPartialUpdate: (
      id: number,
      body: { copy?: string; begin?: string },
      params?: RequestParams
    ) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}/restart`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsDuplicatePartialUpdate
     * @summary Duplicates an existing timesheet record
     * @request PATCH:/api/timesheets/{id}/duplicate
     * @secure
     */
    timesheetsDuplicatePartialUpdate: (id: number, params?: RequestParams) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}/duplicate`,
        'PATCH',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsExportPartialUpdate
     * @summary Switch the export state of a timesheet record to (un-)lock it
     * @request PATCH:/api/timesheets/{id}/export
     * @secure
     */
    timesheetsExportPartialUpdate: (id: number, params?: RequestParams) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}/export`,
        'PATCH',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsMetaPartialUpdate
     * @summary Sets the value of a meta-field for an existing timesheet.
     * @request PATCH:/api/timesheets/{id}/meta
     * @secure
     */
    timesheetsMetaPartialUpdate: (
      id: number,
      body: { name: string; value: string },
      params?: RequestParams
    ) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}/meta`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsList
     * @summary Returns a collection of timesheet records
     * @request GET:/api/timesheets
     * @secure
     */
    timesheetsList: (
      query?: {
        user?: string
        customer?: string
        customers?: string
        project?: string
        projects?: string
        activity?: string
        activities?: string
        page?: string
        size?: string
        tags?: string
        orderBy?: string
        order?: string
        begin?: string
        end?: string
        exported?: string
        active?: string
        full?: string
        term?: string
        modified_after?: string
      },
      params?: RequestParams
    ) =>
      this.request<TimesheetCollection[], any>(
        `/api/timesheets${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsCreate
     * @summary Creates a new timesheet record
     * @request POST:/api/timesheets
     * @secure
     * @description Creates a new timesheet record for the current user and returns it afterwards.
     */
    timesheetsCreate: (
      body: TimesheetEditForm,
      query?: { full?: string },
      params?: RequestParams
    ) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets${this.addQueryParams(query)}`,
        'POST',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsDetail
     * @summary Returns one timesheet record
     * @request GET:/api/timesheets/{id}
     * @secure
     */
    timesheetsDetail: (id: number, params?: RequestParams) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsPartialUpdate
     * @summary Update an existing timesheet record
     * @request PATCH:/api/timesheets/{id}
     * @secure
     * @description Update an existing timesheet record, you can pass all or just a subset of the attributes.
     */
    timesheetsPartialUpdate: (id: number, body: TimesheetEditForm, params?: RequestParams) =>
      this.request<TimesheetEntity, any>(
        `/api/timesheets/${id}`,
        'PATCH',
        params,
        body,
        BodyType.Json,
        true
      ),

    /**
     * @tags Timesheet
     * @name timesheetsDelete
     * @summary Delete an existing timesheet record
     * @request DELETE:/api/timesheets/{id}
     * @secure
     */
    timesheetsDelete: (id: number, params?: RequestParams) =>
      this.request<any, any>(`/api/timesheets/${id}`, 'DELETE', params, null, BodyType.Json, true),

    /**
     * @tags User
     * @name usersMeList
     * @summary Return the current user entity
     * @request GET:/api/users/me
     * @secure
     */
    usersMeList: (params?: RequestParams) =>
      this.request<UserEntity, any>(`/api/users/me`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags User
     * @name usersList
     * @summary Returns the collection of all registered users
     * @request GET:/api/users
     * @secure
     */
    usersList: (
      query?: { visible?: string; orderBy?: string; order?: string; term?: string },
      params?: RequestParams
    ) =>
      this.request<UserCollection[], any>(
        `/api/users${this.addQueryParams(query)}`,
        'GET',
        params,
        null,
        BodyType.Json,
        true
      ),

    /**
     * @tags User
     * @name usersCreate
     * @summary Creates a new user
     * @request POST:/api/users
     * @secure
     * @description Creates a new user and returns it afterwards
     */
    usersCreate: (body: UserCreateForm, params?: RequestParams) =>
      this.request<UserEntity, any>(`/api/users`, 'POST', params, body, BodyType.Json, true),

    /**
     * @tags User
     * @name usersDetail
     * @summary Return one user entity
     * @request GET:/api/users/{id}
     * @secure
     */
    usersDetail: (id: number, params?: RequestParams) =>
      this.request<UserEntity, any>(`/api/users/${id}`, 'GET', params, null, BodyType.Json, true),

    /**
     * @tags User
     * @name usersPartialUpdate
     * @summary Update an existing user
     * @request PATCH:/api/users/{id}
     * @secure
     * @description Update an existing user, you can pass all or just a subset of all attributes (passing roles will replace all existing ones)
     */
    usersPartialUpdate: (id: number, body: UserEditForm, params?: RequestParams) =>
      this.request<UserEntity, any>(`/api/users/${id}`, 'PATCH', params, body, BodyType.Json, true)
  }
}
