/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Get number of followers
 */
export type GetNumberOfFollowersResponse = {
  /**
   * Calculation status.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">status Documentation</a>
   */
  status?: GetNumberOfFollowersResponse.StatusEnum /**/;
  /**
   * The number of times, as of the specified date, that a user added this LINE Official Account as a friend for the first time. The number doesn\'t decrease even if a user later blocks the account or when they delete their LINE account.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">followers Documentation</a>
   */
  followers?: number /**/;
  /**
   * The number of users, as of the specified date, that the LINE Official Account can reach through targeted messages based on gender, age, and/or region. This number only includes users who are active on LINE or LINE services and whose demographics have a high level of certainty.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">targetedReaches Documentation</a>
   */
  targetedReaches?: number /**/;
  /**
   * The number of users blocking the account as of the specified date. The number decreases when a user unblocks the account.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">blocks Documentation</a>
   */
  blocks?: number /**/;
};

export namespace GetNumberOfFollowersResponse {
  export type StatusEnum = "ready" | "unready" | "out_of_service";
}
