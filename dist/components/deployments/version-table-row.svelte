<script>import { page } from '$app/stores';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import { routeForWorkflowsWithQuery } from '../../utilities/route-for';
import { fromScreamingEnum } from '../../utilities/screaming-enums';
import DeploymentStatus from './deployment-status.svelte';
export let routingConfig;
export let version;
export let columns;
$: isCurrent = version.version === routingConfig.currentVersion;
$: isRamping = version.version === routingConfig.rampingVersion;
$: drainageStatus = version.drainageStatus;
$: status = (isCurrent
    ? translate('deployments.current')
    : isRamping
        ? translate('deployments.ramping')
        : drainageStatus
            ? fromScreamingEnum(drainageStatus, 'VersionDrainageStatus')
            : translate('common.inactive'));
$: statusLabel = isCurrent
    ? translate('deployments.current')
    : isRamping
        ? translate('deployments.ramping', {
            percentage: routingConfig.rampingVersionPercentage,
        })
        : drainageStatus
            ? fromScreamingEnum(drainageStatus, 'VersionDrainageStatus')
            : translate('common.inactive');
</script>

<tr>
  {#each columns as { label } (label)}
    {#if label === translate('deployments.version')}
      <td class="p-2 text-left">
        <DeploymentStatus
          {status}
          version={version.version}
          label={statusLabel}
        />
      </td>
    {:else if label === translate('deployments.deployed')}
      <td class="whitespace-pre-line break-words p-2 text-left"
        >{formatDate(version?.createTime, $timeFormat, {
          relative: $relativeTime,
        })}</td
      >
    {:else if label === translate('deployments.workflows')}
      <td class="whitespace-pre-line break-words p-2 text-center"
        ><p>
          <Link
            icon="external-link"
            href={routeForWorkflowsWithQuery({
              namespace: $page.params.namespace,
              query: `TemporalWorkerDeploymentVersion="${version.version}"`,
            })}
          />
        </p></td
      >
    {/if}
  {/each}
</tr>
