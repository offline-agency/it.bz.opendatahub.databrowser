// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { withOdhBaseUrl } from '../../config/utils';
import { unwrapData } from '../api/dataExtraction';
import { useApiRead } from '../api/useApi';
import { WithTourismPagination } from '../datasets/pagination/types';
import { TourismPublisher } from './types';

interface OdhPublisher {
  Id: string;
  Key: string;
  Name: Record<string, string>;
  PushConfig: {}[];
}

const publisherUrl = withOdhBaseUrl('/v1/Publisher?pagesize=100');

export const usePublisher = () => useApiRead(publisherUrl, { select });

const select = (
  data: WithTourismPagination<OdhPublisher[]>
): TourismPublisher[] => {
  // Unwrap data from pagination
  const unwrappedData = unwrapData<OdhPublisher[]>(data);
  return (
    unwrappedData
      .filter((publisher) => publisher.PushConfig?.length > 0)
      // At the moment it should not be possible to send push notifications to the noi community app
      // This exception is hardcoded here, but it should be handled in a more generic way
      .filter((publisher) => publisher.Id !== 'noi-communityapp')
      .map<TourismPublisher>((publisher) => ({
        id: publisher.Id,
        key: publisher.Key,
        name: publisher.Name,
      }))
  );
};
