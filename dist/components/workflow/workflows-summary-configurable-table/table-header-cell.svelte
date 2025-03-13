<script>export let column;
$: ({ label } = column);
</script>

<th data-testid="workflows-summary-table-header-cell-{label}">
  {label}
</th>
